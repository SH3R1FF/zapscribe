import React from 'react';
import { Template } from '../../_components/TemplateListSection';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { LoaderIcon } from 'lucide-react';
import logo from "../../../../public/logo.svg"

interface Props {
    selectedTemplate?: Template;
    userFormInput: any;
    loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: Props) {
    const [formData, setFormData] = React.useState<any>();

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        userFormInput(formData);
    };

    return (
        <div className='p-5 shadow-lg border border-zinc-800 rounded-lg bg-neutral-900'>
            <div className='flex items-center gap-3 py-4'>
                <Image
                    // src={selectedTemplate?.icon || '/path/to/default-icon.png'} // Provide a default icon path here
                    src={selectedTemplate?.icon || '/logo.svg'} // Provide a default icon path here
                    alt={selectedTemplate?.name || 'Template Icon'}
                    width={50}
                    height={50}
                    />
                <h2 className='font-bold text-2xl mb-2 bg-[radial-gradient(100%_100%_at_top_left,white,white,#f97300)] text-transparent bg-clip-text '>{selectedTemplate?.name}</h2>
            </div>
            <p className='text-neutral-600 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div className='my-2 flex-col gap-2 mb-7' key={index}>
                        <Label className='font-bold text-white'>{item.label}</Label>
                        {item.field === 'input' ? (
                            <Input className='border-zinc-800 text-neutral-500' name={item.name} required={item?.required} onChange={handleInputChange} />
                        ) : item.field === 'textarea' ? (
                            <Textarea className='border-zinc-800 text-neutral-500 h-32' name={item.name} required={item?.required} onChange={handleInputChange} />
                        ) : null}
                    </div>
                ))}
                <Button type='submit' className='w-full py-6 bg-orange-500 hover:bg-amber-700 text-neutral-800' disabled={loading}>
                    {loading && <LoaderIcon className='animate-spin w-5 h-5 mr-3'/>}
                    Generate Content
                </Button>
            </form>
        </div>
    );
}

export default FormSection;
