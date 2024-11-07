import './Package.css';
function Package(props){
    return (<div className='package'>
        {props.children}
    </div>);

}
export default Package;