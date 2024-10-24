import { useState } from "react"
import './FormNovaDisciplina.css'

function FormNovaDisciplina(props) {

        const [nomeDisciplina, setnomeDisciplina] = useState('');
        const [nota, setNota] = useState('');
        const [data_avalia, setdata] = useState('');

        const nomeChangeHandler = (event) =>{
            setnomeDisciplina(event.target.value);
        };
        const notaChangeHandler = (event) =>{
            setNota(event.target.value);
        };
        const dataChangeHandler = (event) =>{
            setdata(event.target.value);
        }
        const submitHandler = (event) => {
            event.preventDefault();

            let novaDisciplina = {
                dataAvalia: new Date(data_avalia),
                nome: nomeDisciplina,
                valorNota: nota   
            };

            props.onSaveDisciplinaData(novaDisciplina);

            setdata('');
            setnomeDisciplina('');
            setNota('');

        };

        const cancelHandler = () =>{
            props.onCancel();
          }
        

    return (
        <div className="new-disciplina">
            <form onSubmit={submitHandler}>
                <div className="new-disciplina__controls">
                    <div className="new-disciplina__control">
                        <label>Disciplina</label>
                        <input type="text" value={nomeDisciplina} onChange={nomeChangeHandler}/>
                    </div>
                    <div className="new-disciplina__control">
                        <label>Nota:</label>
                        <input type = 'number' value={nota} onChange={notaChangeHandler}/>
                    </div>
                    <div className="new-disciplina__control">
                        <label>Data Avaliação:</label>
                        <input type="date" value={data_avalia} min ='2010-01-01' step="1" max =' 2050-12-31' onChange={dataChangeHandler}/>
                    </div>
                </div>
                <div className="new-disciplina__actions">
                    <button type="submit" >Adicionar Disciplina</button>
                    <button type="reset" onClick={cancelHandler}>Cancelar</button>
                </div>     
            </form>
        </div>
    )
}

export default FormNovaDisciplina; 