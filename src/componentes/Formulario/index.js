import './Formulario.css'
import CampoTexto from '../CampoTexto'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar um card</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira o link da imagem" />
            </form>


        </section>

    );
};

export default Formulario