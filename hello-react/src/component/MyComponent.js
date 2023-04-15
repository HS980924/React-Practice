const MyComponent = ({name}) => {
    return(
        <div>나의 멋진 {name}</div>
    );
};

MyComponent.defaultProps = {
    name: '',
}

export default MyComponent;