const WelcomeMessage = () => {
  const username: (string) =  "Anita Neupane"
  return (
    <>
      <div className=" flex m-3">
        <h1 className="text-lg font-semibold"> Welcome, {username}</h1>
        
      </div>
    </>
  )
}

export default WelcomeMessage
