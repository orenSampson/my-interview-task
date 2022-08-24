import Container from '@mui/material/Container';

const Layout = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default Layout;