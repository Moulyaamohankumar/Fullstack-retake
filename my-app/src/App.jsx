
import './App.css'
import TeamCard from './Components/TeamCard'

function App() {


  return (
    <div style={{
      display:'flex',
      gap:'20px',
      margin:'16px',
    }}>
      <TeamCard
        name = 'John Doe'
        title = 'Software engineer'
      />
       <TeamCard
        name = 'James'
        title = 'Civil engineer'
      />

    </div>
   
  )
}

export default App
