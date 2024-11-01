import React from 'react';
import { Template } from '../../_components/TemplateListSection';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { LoaderIcon } from 'lucide-react';

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
        <div className='p-5 shadow-lg border rounded-lg bg-white'>
            <Image
                src={selectedTemplate?.icon || '/path/to/default-icon.png'} // Provide a default icon path here
                alt={selectedTemplate?.name || 'Template Icon'}
                width={50}
                height={50}
            />
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div className='my-2 flex-col gap-2 mb-7' key={index}>
                        <Label className='font-bold'>{item.label}</Label>
                        {item.field === 'input' ? (
                            <Input name={item.name} required={item?.required} onChange={handleInputChange} />
                        ) : item.field === 'textarea' ? (
                            <Textarea name={item.name} required={item?.required} onChange={handleInputChange} />
                        ) : null}
                    </div>
                ))}
                <Button type='submit' className='w-full py-6' disabled={loading}>
                    {loading && <LoaderIcon className='animate-spin w-5 h-5 mr-3'/>}
                    Generate Content
                </Button>
            </form>
        </div>
    );
}

export default FormSection;
