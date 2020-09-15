import {createElement,render,Component} from './toy-react.js'

for(let i of [1,2,3]){
    console.log(i)
}

class MyComponent extends Component{
  render(){
      return <div>
          <h1>my component</h1>
          {this.children}
          </div>
  }

}



render(<MyComponent id="a" class="aa">
    <h1>11</h1>
    <div>22</div>
    </MyComponent>,document.body)