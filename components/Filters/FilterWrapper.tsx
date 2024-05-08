import {Wrapper, FilterTitle, FilterContent}  from './styles'
interface IFilterWrapper {
  title: string;
  children: any;
}


export default function FilterWrapper({ title, children }: IFilterWrapper) {
  return (
    <Wrapper>
      <FilterTitle>{title}</FilterTitle>
      <FilterContent>{children}</FilterContent>
    </Wrapper>
  );
}
