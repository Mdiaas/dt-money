import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles'
export function NewTransactionModal(){
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                
                <CloseButton>
                    <X size={24}/>
                </CloseButton>
                <form action="">
                    <input type="text"   placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text"   placeholder="Categoria" required />
                

                    <TransactionType>
                    <TransactionButton value="income" variant='income'><ArrowCircleUp />Entrada</TransactionButton>
                    <TransactionButton value="outcome" variant='outcome'><ArrowCircleDown />Saída</TransactionButton>
                    </TransactionType>
                    <button type='submit'>Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}