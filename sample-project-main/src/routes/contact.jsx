import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})


function Contact(){
    return (<div>
      <h1>Hello world from the Contact</h1>
    </div>)
}