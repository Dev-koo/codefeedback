import React from "react";

class Life extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            state: "koo"
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState);
        if (prevState !== nextProps) {
            return { state: "다르다면 이 값." };
        }

        return null;
    }
    // componentWillMount() {
    //   console.log("componentWillMount");
    //   this.setState({
    //     state: "koo"
    //   });
    // }

    render() {
        return <div>이름: {this.state.state}</div>;
    }
}

// Life.defaultProps = "홍길동";

export default Life;
