import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IDish } from '../../types/types';

interface IModalChangeDish {
    data: IDish | null,
    setShow: (e: IDish | null) => void,
}

export default function ModalChangeDish({ data, setShow }: IModalChangeDish) {   
    const { register, handleSubmit } = useForm<IDish>({
        defaultValues: {
            name: data?.name,
            compound: data?.compound,
            price_for_mid: data?.price_for_mid,
            price_for_large: data?.countByLarge
        }
    });

    const onSubmit: SubmitHandler<IDish> = (formState) => {
        console.log(formState);
    }

    return (
        <Modal show={!!data} onHide={() => setShow(null)}>
            {data !== null &&
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{data.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3" size="sm">
                            <InputGroup.Text>Название</InputGroup.Text>
                            <Form.Control
                                {...register("name")}
                            />
                        </InputGroup>
                        <Form.Group className="mb-3">
                            <Form.Label>Состав</Form.Label>
                            <Form.Control
                                as="textarea"
                                {...register("compound")}
                            />
                        </Form.Group>
                        <InputGroup className="mb-3" size="sm">
                            <InputGroup.Text>Цена(мал)</InputGroup.Text>
                            <Form.Control
                                {...register("price_for_mid")}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3" size="sm">
                            <InputGroup.Text>Цена(бол)</InputGroup.Text>
                            <Form.Control
                                {...register("price_for_large")}
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Сохранить
                        </Button>
                        <Button variant="secondary" onClick={() => setShow(null)}>
                            Закрыть
                        </Button>
                    </Modal.Footer>
                </Form>
            }
        </Modal>
    )
}