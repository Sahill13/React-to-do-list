import Random from "./Random";


export default function App() {
  var myself = "this is me Sahil"
  let self=(function(){
    return "this is a function created through react."
  })
  var anil=()=>{
    return "this is a arrow function"
  }

  return <div> <h1>
    This is the react application
    and now i am showing you how dynamic i am making it.
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
     {myself}
     {self()}
     {anil()}
     So the Random No is: {Math.round(Random())}
  </h1>
  </div>
}

