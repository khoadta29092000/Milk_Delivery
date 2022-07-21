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
import { default as React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

export default function Login() {
    const history = useHistory();
    async function loginIn() {
      
    }
    const loginGoogle = async (token) => {
        console.log("token gooleapi", token)
        localStorage.setItem("user-token", "b");
        history.push("/")
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const [errorRequired, setErrorRequired] = useState(false)
    const validRequired = new RegExp(/^.{1,}$/);

    async function loginIn() {
      if(!validRequired.test(email) || !validRequired.test(password)){
        setErrorRequired(true);
        setError(undefined);
      }else{
        setErrorRequired(false);
        const body = {
            email,
            password
        };
        let res = await fetch(`http://www.subcriptionmilk.somee.com/api/FirebaseServices/loginadmin?email=${email}&password=${password}`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer token',
            },
            body: JSON.stringify(body)

        }).then(res => res.json()).then(result => {
console.log("--------------", result.statusCode)
            if (result?.statusCode == 200) {
                
                history.push("/")
                localStorage.setItem("user-token", result?.uidfb);
                localStorage.setItem("id-token", result?.iddb);
            }
           

        }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ',
            );
            setError("The Account not exist or Invalid email/password!!")
        });
    }
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
                    {error && <div className='text-red-600 mx-auto px-8 text-xl'>{error}</div>}
                    {errorRequired && <div className='text-red-600 ml-11 px-8 text-xl'>Email or Password not required</div>}
                    <CardBody className="mb-0">
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </CardBody>

                    <CardFooter>
                        <div className="flex mb-2 justify-center bg-bb">
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
                    <div color='' className=' flex text-blue-800 font-light justify-center -mt-5 mb-2 bg-bb '>
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
