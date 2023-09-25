class FormInputComponent extends React.Component{
    constructor(props){

        if(!props.type)
        throw new Error("type for input is necessory");

        super(props);
    }

    render(){

            if (this.props.type == "username") {

              return (
                <div className="input-section">
                  <label htmlFor="username">Username:</label>
                  <input id="username" type="text" />
                </div>
              );
            }
             else if (this.props.type == "password") {
              return (
                <div className="input-section">
                  <label htmlFor="password">Password:</label>
                  <input id="password" type="password" name="password" />
                </div>
              );
            }
  
            throw new Error("type is not valid");
          }
    
}

class SubmitButtonComponent extends React.Component{

    constructor(props){

        if(!props.value)
            throw new Error("value for submit button is necessory");

        super(props);

    }
    
    render(){

            return (
    
            <div className="submit-section">
                  <input type="submit" value={this.props.value} />
                </div>
            );
    }
    
}

function CustomFormComponent(){

    return (
        <form className='signin-form'>
            <FormInputComponent type='username'/>
            <FormInputComponent type='password'/>
            <SubmitButtonComponent value='Login'/>
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CustomFormComponent/>);