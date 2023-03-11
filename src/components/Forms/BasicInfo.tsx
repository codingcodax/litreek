import { type FormEventHandler } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { Form } from '~/components/ui';

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const BasicInfo = ({ onSubmit }: Props) => {
  const { data } = useSession();

  console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Form.Container>
        <Form.Header>
          <Form.Title>Let&apos;s get started!</Form.Title>
          <Form.Description>
            This information will appear on your{' '}
            <span className='font-medium'>treek</span> page.
          </Form.Description>
        </Form.Header>

        <Form.Items>
          <div className='flex space-x-4'>
            <Image
              alt='user profile'
              width={100}
              height={100}
              src={data?.user.image ?? 'https://avatar.vercel.sh/treek.link'}
              className='h-[72px] w-full max-w-[72px] rounded-full bg-gray-300'
            />
            <Form.Field name='name'>
              <Form.LabelWrapper>
                <Form.Label>Name</Form.Label>
                <Form.Message match='valueMissing'>
                  Please provide a name
                </Form.Message>

                <Form.Message match='tooShort'>
                  Your name needs to be at least 4 chars
                </Form.Message>
              </Form.LabelWrapper>
              <Form.Input
                type='text'
                defaultValue={data?.user.name ?? ''}
                placeholder='First Last'
                minLength={4}
                required
              />
            </Form.Field>
          </div>

          <Form.Field name='username'>
            <Form.LabelWrapper>
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Message match='valueMissing'>
                Please provide a username
              </Form.Message>
              <Form.Message match='tooShort'>
                Your username needs to be at least 4 chars
              </Form.Message>
            </Form.LabelWrapper>
            <Form.Username />
          </Form.Field>

          <Form.Field name='bio'>
            <Form.LabelWrapper>
              <Form.Label>Bio</Form.Label>
            </Form.LabelWrapper>
            <Form.Textarea
              className='max-h-28 min-h-[60px] w-full'
              placeholder='UI/UX Designer'
            />
          </Form.Field>
        </Form.Items>
        <Form.Button>Continue</Form.Button>
      </Form.Container>
    </Form>
  );
};

export default BasicInfo;
