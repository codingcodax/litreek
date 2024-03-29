import { type GetServerSideProps, type NextPage } from 'next';

import { getServerAuthSession } from '~/server/auth';
import {
  Form,
  FormButton,
  FormContainer,
  FormDescription,
  FormField,
  FormGitHubButton,
  FormGoogleButton,
  FormHeader,
  FormInput,
  FormItems,
  FormLabel,
  FormLabelWrapper,
  FormMessage,
  FormOrDivider,
  FormTitle,
  FormUsername,
} from '~/components/ui/Form';
import { Link } from '~/components/ui/Link';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (session)
    return {
      redirect: { destination: '/dashboard', permanent: false },
    };

  return { props: { session } };
};

const Register: NextPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center'>
      <Form>
        <FormContainer>
          <FormHeader>
            <FormTitle>Create Account</FormTitle>
            <FormDescription>
              Already have and account?{' '}
              <Link href='/login' intent='underline'>
                Login
              </Link>
            </FormDescription>
          </FormHeader>

          <FormItems>
            <FormField name='email'>
              <FormLabelWrapper>
                <FormLabel>Email</FormLabel>
                <FormMessage match='valueMissing'>
                  Please enter your name
                </FormMessage>
              </FormLabelWrapper>
              <FormInput required placeholder='name@example.com' type='email' />
            </FormField>

            <FormField name='password'>
              <FormLabelWrapper>
                <FormLabel>Password</FormLabel>
                <FormMessage match='valueMissing'>
                  Please enter a password
                </FormMessage>
                <FormMessage match='tooShort'>
                  Your password is to short
                </FormMessage>
              </FormLabelWrapper>
              <FormInput
                required
                id='password'
                minLength={5}
                placeholder='securepassword'
                type='password'
              />
            </FormField>

            <FormField name='username'>
              <FormLabelWrapper>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <FormMessage match='valueMissing'>
                  Please provide a username
                </FormMessage>
                <FormMessage match='tooShort'>
                  Your username needs to be at least 4 chars
                </FormMessage>
              </FormLabelWrapper>
              <FormUsername placeholder='yourname' />
            </FormField>
          </FormItems>

          <FormButton>Sign Up with Email</FormButton>
        </FormContainer>

        <FormOrDivider />

        <FormItems>
          <FormGoogleButton>Sign Up with Google</FormGoogleButton>
          <FormGitHubButton>Sign Up with GitHub</FormGitHubButton>
        </FormItems>
      </Form>

      <p className='text-gray-1100 mx-auto mt-6 w-full max-w-md px-12 text-center text-sm'>
        By signing up, you agree to the{' '}
        <Link href='/terms' intent='underline'>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href='privacy' intent='underline'>
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Register;
