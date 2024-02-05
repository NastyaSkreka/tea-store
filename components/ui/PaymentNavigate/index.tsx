import { NavigateContainer, Container, PointContainer, Divider, NavItem } from './style'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    {id: 1,  path: '/cart'}, 
    {id: 2,  path: '/total'}, 
    {id: 3,  path: '/payment'}, 
]
export default function PaymentNavigate() {

    const pathname = usePathname();

    return (
        <NavigateContainer>
            <Container>
                {navLinks.map((navLink, index) => (
                    <>
                    <Link key={navLink.id} href={navLink.path} passHref>
                        <PointContainer className={pathname === navLink.path ? 'active' : ''}/>
                    
                    </Link>
                    {index !== navLinks.length - 1 && <Divider/>}
                    </>
                ))}
            </Container>
            <Container>
                <NavItem>Address</NavItem>
                <NavItem>Ordersummary</NavItem>
                <NavItem>Payment</NavItem>
            </Container>
        </NavigateContainer>   
    )   
}