import React from "react";

class ErrorBoundary extends React.Component {

  constructor(props){
    super(props)
    this.state = { hasError : false}
  }

    static getDerivedStateFromError(error){
      if(error)
      {return {hasError : true}}
    }
  
 

  render() {
    if (this.state.hasError) {
      return (
        <p id="error">
          Something went wrong , this error is genrated form ErrorBoundary
        </p>
      );
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorBoundary;
