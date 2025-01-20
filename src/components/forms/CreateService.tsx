import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { Button } from 'antd';


interface IFormProps {
    id?: string
    findFuncoes?: () => void
    setModalOpen: (v: boolean) => void
}


export function FormAddService(props: IFormProps) {


    const { api_auth, authState } = useAuth();
    const user = authState.usuario
    const [inputTitulo, setInputTitulo] = useState('');
    const [inputDescricao, setInputDescricao] = useState('');
    const [inputId, setInputId] = useState('');
    const [onEdit, setOnEdit] = useState(false);


    const handleDelete = useCallback(() => {
        api_auth.delete('/funcao/' + props.id).then((resp) => {
            setOnEdit(false);
            props.setModalOpen(false);
            toast.success("Registro de função removido com sucesso.");
        }).catch(() => {
            toast.error("Ops! Não foi possível realizar esta operação.");
        })
    }, [api_auth, props]);


    const updateUser = useCallback(() => {
        api_auth.put('/funcao/' + inputId, {
            titulo: inputTitulo,
            descricao: inputDescricao
        }).then((resp) => {
            setOnEdit(false);
            props.setModalOpen(false);
            toast.success("Registro de função atualizado com sucesso.");
        }).catch(() => {
        })
    }, [api_auth, inputDescricao, inputId, inputTitulo, props]);


    return (
        <div style={{ transition: 'all .4s', overflow: 'hidden' }}>

            <div>

                <div className="row">
                    <div className='col-md-2 col-sm-3 form-group'>
                        <label htmlFor="name">ID</label>
                        <input disabled type="text" value={inputId} onChange={e => setInputId(e.target.value)} placeholder="nome do funcionário" className="form-control text-center" />
                    </div>
                    <div className='col-md-10 form-group'>
                        <label htmlFor="name">Título</label>
                        <input disabled={!onEdit} type="text" value={inputTitulo} onChange={e => setInputTitulo(e.target.value)} placeholder="nome do funcionário" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 form-group">
                        <label htmlFor="name">Descrição</label>
                        <textarea disabled={!onEdit} value={inputDescricao} placeholder='Nenhuma descrição cadastrada' onChange={e => setInputDescricao(e.target.value)} className='form-control' rows={4}></textarea>
                    </div>
                </div>

                <div className='row mb-0 mt-2'>
                    <div className="col-md-6">
                        <div className="col-md-4 form-group">
                            {onEdit ?
                                <div onClick={handleDelete}>
                                    <Button>Excluir</Button>
                                </div>
                                :
                                ''
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-end">
                            <div className="col-md-4 col-sm-12 form-group">
                                {onEdit ?
                                    <button onClick={() => { setOnEdit(false) }} className='light form-control' >Cancelar</button>
                                    :
                                    ''
                                }
                            </div>
                            <div className="col-md-4 col-sm-12 form-group">
                                {onEdit ?
                                    // <button onClick={updateUser} className='primary form-control' >Salvar</button>
                                    <div onClick={updateUser} >
                                        <Button>Salvar</Button>
                                    </div>
                                    :
                                    (user?.is_admin ?
                                        <button onClick={() => { setOnEdit(true) }} className='primary form-control' >Editar</button>
                                        : '')
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}