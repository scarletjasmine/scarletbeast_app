import InputError from '../../../Components/InputError';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import React from 'react';

import { isAddress } from '@ethersproject/address';



export default function UpdateCryptoCurrencyForm({ status, className = '' }: any) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        ether_address: user.ether_address
    });
    const isValidEthereumAddress = (address) => {
      if (typeof address !== 'string') {
        return false;
      }
      return isAddress(address);
    };
    const submit = (e: any) => {
        e.preventDefault();
        if (!isValidEthereumAddress(data.ether_address)){
            alert('Invalid Ethereum address');
        }
        patch(route('profile.crypto.update'));
    };

    return (
        <React.Fragment>
            <Col>
                <h2 >Crypto Currency Information</h2>
            <Card >

                <p className="text-muted p-2">
                    Update your ethereum address.
                </p>
                <Card.Body>
                    <Form onSubmit={submit} className="mt-6 space-y-6">
                        <Row >
                            <Col lg={6}>
                                <Form.Label htmlFor="ether_address" value="Name">Ether Address</Form.Label>

                                <Form.Control
                                    id="ether_address"
                                    className="mt-1 block w-full border"
                                    value={data.ether_address}
                                    onChange={(e: any) => setData('ether_address', e.target.value)}
                                    required
                                    autoFocus
                                    autoComplete="ether_address"
                                />

                                <InputError className="mt-2" message={errors.ether_address} />
                            </Col>

                            
                        </Row>

                      

                        <div className="flex items-center gap-4 mt-4">
                            <Button variant="success" disabled={processing} type='submit' className='btn btn-success'>Save</Button>

                             <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                            </Transition>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            </Col>
        </React.Fragment>
    );
}
