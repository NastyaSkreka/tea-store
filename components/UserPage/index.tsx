import {
  FormContainer,
  UserImage,
  TextFiled,
  FieldContainer,
  StyledButton,
  Actions,
} from './style';
import avatar from '@/public/image/avatar.png';
import PageLayout from '@/components/ui/pageLayout';
import { usePathname } from 'next/navigation';

export default function UserPage() {
  const pathname = usePathname().replace('/', ' ');

  return (
    <PageLayout headerVariant="with-arr-path" path={pathname}>
      <FormContainer>
        <UserImage width={50} height={50} src={avatar} alt="avatar" />
        <FieldContainer>
          <TextFiled>user@gmail.com</TextFiled>
        </FieldContainer>
        <FieldContainer>
          <TextFiled>User password</TextFiled>
        </FieldContainer>
        <FieldContainer>
          <TextFiled>0974505442</TextFiled>
        </FieldContainer>
        <Actions>
          <StyledButton>Update</StyledButton>
          <StyledButton color="#800000">Delete</StyledButton>
        </Actions>
      </FormContainer>
    </PageLayout>
  );
}
