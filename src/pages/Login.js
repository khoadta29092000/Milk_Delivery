import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import Stack from '@mui/material/Stack';
import ButtonGoogle from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

export default function Login() {
    const history = useHistory();
    async function loginIn() {
        localStorage.setItem("user-token", "b");
        history.push("/")
    }
    const loginGoogle = async (token) => {
        console.log("token gooleapi", token)
        localStorage.setItem("user-token", "b");
        history.push("/")
    }


    return (
        <Page>
            <DefaultNavbar />
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Login
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="Remember Me"
                                id="remember"
                            />
                        </div>
                    </CardBody>

                    <CardFooter>
                        <div className="flex -mt-7 justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                                onClick={loginIn}
                            >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
                    <div color='' className='flex text-blue-800 font-light justify-center -mt-5 mb-2 bg-bb '>
                        OR
                    </div>
                    <div className='flex  justify-center bg-bb '>
                        <Stack direction="row" spacing={2}>
                            <GoogleLogin

                                className="w-7/10 "
                                clientId="1039209918487-4u4orng4ii1m9csn6ocn8jmav6aoq0bc.apps.googleusercontent.com"
                                buttonText="Login with Gmail"
                                onSuccess={(data) => {
                                    if (data?.tokenObj?.id_token) {
                                        loginGoogle(data?.tokenObj?.id_token)
                                    } else {
                                        alert('Login Error')
                                    }
                                }}
                                onFailure={() => {
                                    alert('Login Error')
                                }}
                                cookiePolicy={'single_host_origin'}
                            ></GoogleLogin>

                        </Stack>

                    </div>

                </Card>
            </Container>
            <SimpleFooter />
        </Page>
    );
}
