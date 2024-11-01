"use client";

import React from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { Template } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

interface Props {
    params: Promise<{
        'template-slug': string;
    }>;
}

function CreateNewContent(props: Props) {
    const [selectedTemplate, setSelectedTemplate] = React.useState<Template | undefined>(undefined);

    const [loading, setLoading] = React.useState(false);

    const [aiOutput , setAiOutput] = React.useState<string>('');

    const {user} = useUser();
    const GenerateAIContent = async (formData : any) => {

        setLoading(true);

        const SelectedPrompt = selectedTemplate?.aiPrompt || '';

        const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt

        const result = await chatSession.sendMessage(FinalAIPrompt);

        // console.log(result.response.text());
        setAiOutput(result?.response.text());
        await SaveInDb(formData, selectedTemplate?.slug , result?.response.text());
        setLoading(false);
        
    }

    const SaveInDb = async (formData: any, slug: any, aiResp: string ) => {
        if (!slug) {
            console.error("Template slug is undefined");
            return;
        }
        const result =  await db.insert(AIOutput).values({
            formData: JSON.stringify(formData),
            templateSlug: slug,
            aiResponse: aiResp || '',
            createdBy: user?.primaryEmailAddress?.emailAddress || '', 
            // createdAt: moment().format('dd/mm/yyyy'),
            createdAt: moment().format("MMM Do YY"),
        // });
        });

        console.log(result);
    };

    React.useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await props.params;
            const foundTemplate = Templates.find(
                (item: Template) => item.slug === resolvedParams['template-slug']
            );
            setSelectedTemplate(foundTemplate);
        }
        
        fetchParams();
    }, [props.params]);

    return (
        <div className='lg:p-10 p-5'>
            <Link href={'/dashboard'}>
                <Button ><ArrowLeft/> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                {/* FormSection */}
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(formdata: any) => GenerateAIContent(formdata)}
                    loading={loading}
                />

                {/* OutputSection */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput}/>
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
