import { useEffect, useState } from 'react'
import { Detail, Form, ContainerItens, Produtos, Footer, Container } from './styles'
import { useForm } from 'react-hook-form'

function App() {
  const [product, setProduct] = useState([])
  const [page, setPage] = useState();

  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`;

  const getApi = async () => {
    const { products: data } = await fetch(url).then((data) => data.json());
    setPage(page + 1);
    setProduct(data);

  };

  useEffect(() => {
    getApi()
  }, [])



  const { register, handleSubmit, } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Container>
      <Detail className='detail'>

        <h6> Uma seleção de produtos</h6>
        <h2>especial pra você</h2>
        <h6>Todos os produtos desta lista foram selecionados
          a partir da sua navegação. Aproveite!</h6>
        <div>
          <button> Conheça o linx</button>
          <button>Ajude o algorítimo</button>
          <button>Seus produtos</button>
          <button>Compartilhe</button>
        </div>
      </Detail>

      <Form action="https://formsubmit.co/marcos.vinicius7170@gmail.com" method="POST"  >
        <div >
          <h1>Ajude o algorítimo a ser mais certeiro</h1>
          <p className='textInstitucional'>Em pleno 2022, ano da liberdade. Projetinho fellas.
            Vovô bugou o meu sistema com seu shape. Tava pensa
            ndo aqui, não sou bom em nada, ainda bem que eu tre
            ino. Mais um motivo pra você treinar. Conhece o
            Elon Musk? Óbvio, tu é nerd. Buguei o sistema. O
            shape está falando. Nem sei como seria o mundo s
            em eu estar sheipado. Se seu pai não te ensinou a
            frequentar uma academia, ele te educou errado. Quem
            nunca errou que atire a primeira pedra. Uma vida se
            m shape é viver como um mero mortal. Botei o shape
            em jogo. Dei um perfil fake meu pra elas seguirem
            , quero um amor de verdade não uma rata qu
            e me quer pelo Tog
            uro que sou.
            <br />
            Em pleno 2022, ano do amor. Divulgar que tô sh
            eipado, ninguém quer. V
            ou usar toda minha carência e me dedicar na musc
            ulação. Hoje o menino da nota vermelha
            venceu. .Um shape vale mais que mil palavras. Se está desempregado e ainda não tem Shape, é uma desonra samurai.</p>
        </div>
        <div>
          <label htmlFor="name">
            Seu nome
            <input id='inputs'   type="text" name='name' {...register("Name")} />
          </label>

          <label htmlFor="">
            E-mail
            <input id='inputs' type="email" name='email' {...register("email")} />
          </label>

          <label htmlFor="">
            CPF
            <input id='inputs' type="number" name='CPF' {...register("Cpf")} />
          </label>

          <div className='radio'>

            <input id='masc' type="radio" value={'Masculino'} {...register("gender")} />
            <label htmlFor="masc" name="gender">  Masculino </label>

            <input id='fem' type="radio" value={'Feminino'} {...register("gender")} />
            <label htmlFor="fem" name="gender"> Feminino </label>

            <input type="hidden" name="_template" value="table"/>
            <input type="hidden" name="_autoresponse" value="Aqui estão as informações de um possível cliente:"/> 

          </div>


          <button type='submit'>Enviar</button>
        </div>
      </Form>
      <ContainerItens>

 <p className='line'>Sua seleção especial</p>
        

        <Produtos>
          {product &&
            product.map(products => (

              <div key={products.id} className='product'>
<div className='image'>
                <img src={products.image} alt="Imagem do produto" />
                <h2>{products.name}</h2>
</div>
      <div className="items">
                <h5>{products.description}</h5>
                <p>De: {products.oldPrice}</p>
                <p>Por: {products.price}</p>
                <p>Ou 2x de: {products.price / 2}</p>
<div>
            <button>Comprar</button>
</div>
      </div>


              </div>
              
            ))

          }
        </Produtos>
        <button onClick={getApi} style={{marginBottom: '100px'}} className='moreProducts' >Ainda mais produtos aqui!</button>

      </ContainerItens>


      <Footer>
        <p className="secLine" >Compartilhe a novidade</p>

        <p>Quer que seus amigos também ganhem
          a lista personalizada deles ? Preencha agora!</p>
<form action='https://formsubmit.co/marcos.vinicius7170@gmail.com' method="POST"> 
<div>
        <label >
          Nome do seu amigo:
          <input type="text" name='Nome do amigo' />
        </label>

        <label >
          E-mail
          <input  type="email" name='Email do amigo' />
        </label>
</div>
            <input type="hidden" name="_template" value="box"/>
            <input type="hidden" name="_autoresponse" value="Indicação do amigo para outro possível cliente: "/>
            <input type="hidden" name="_subject" value="Novo acesso a sua landig page"></input>
        <button type='submit'>Enviar agora</button>
</form>

      </Footer>
      <Detail down={true} >
       <p>Linx impulse</p> 
       <p>2019</p>
      </Detail >
    </Container>
  )
}

export default App

