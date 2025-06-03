import Card from './Card'

const CardComponent = () => {
  return (
    <div>
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
                name="John"
                age={21}
                bio='Hello I am a student living in Kathmandu.'
                email='john@gmail.com'
            />
            <Card
                name="Shreya"
                age={18}
                bio="Hello I'm a professional working in Arbytes"
                email='shreya@gmail.com'
            />
            <Card
                name="Anita"
                age={25}
                bio='A dedicated and professionally motivated learner'
                email='anita@gmail.com'
            />
        </div>
        </div>
    </div>
  )
}

export default CardComponent
