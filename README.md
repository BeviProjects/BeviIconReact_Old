<h1 align="center">BeviIcon React</h1>

<h3 align="center">Biblioteca de ícones da Bevi para projetos React</h3>

<br />
<br />
<br />
<br />

## Como começar

### Instalação

```bash
npm i -D @types/bevi-icon-react
```

<br />

### Aplicação

```javascript
import React from 'react'
import BvIcon from 'bevi-icon-react'

const Page = () => {
  return (
    <BvIcon name={'cube'}/>
  )
}

export default Page
```

<br />
<br />

## Variações

### Solid

```html
<BvIcon variation={'solid'} name={'cube'}/>
```

<br />

### Duo

```html
<BvIcon variation={'duo'} name={'cube'}/>
```

<br />

### Dark

```html
<BvIcon variation={'dark'} name={'cube'}/>
```

<br />

### Light

```html
<BvIcon variation={'light'} name={'cube'}/>
```

<br />
<br />

## Tamanho

### Padrão

Por padrão o tamanho de todos os ícones é de 32px/2rem.

<br />

### Editando

É possível definir o tamanho do ícone de forma simples utilizando o atributo de size presente no componente, o valor presente no size será aplicado com a unidade de medida **rem**

```html
<BvIcon variation={'light'} name={'cube'} size={4} />
```

<br />
<br />

## Acessibilidade

### aria-hidden

Caso o ícone seja aplicado apenas de forma decorativa, não tem a necessidade de anunciar-lo, já que o conteúdo em volta fará isso.

```html
<BvIcon variation={'duo'} name={'cube'} hidden={true}/>
```

<br/>

### title

Caso seja necessário, é possível adicionar um título ao ícone que será aplicado com a tag de título presente no HTML. 

```html
<BvIcon variation={'duo'} name={'cube'} title={'Título do ícone'}/>
```

<br/>

### label

Também é possível acrescentar legenda ao ícone caso a descrição seja necessária.

```html
<BvIcon variation={'duo'} name={'cube'} label={'Legenda do ícone'} />
```

<br/>
<br/>

## Estilização

### Padrão

Ao aplicar no projeto, o ícone receberá automaticamente classes css com seu respectivo nome para estilização mais fácil.

**ícone no arquivo jsx/tsx:**
```html
<BvIcon variation={'duo'} name={'cube'} />
```

<br/>

**Ícone gerado:**
```html
<svg 
  width="..." 
  height="..." 
  viewBox="... ... ... ..." 
  data-icon="bv-cube" 
  class="bv-icon bv-cube" 
  fill="..." 
  xmlns="...">
  ...
</svg>
```

<br/>

### Estilização específica

Também é possível adicionar seu próprio estilo ao ícone, com o atributo já conhecido no react `className=""` dessa forma:

```html
<BvIcon 
  variation={'duo'} 
  name={'cube'} 
  className={`${style.bvIcon} color-primary-01`} />
```


<br/>
<br/>
<br/>