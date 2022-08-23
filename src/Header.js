const Header = props => {
    console.log(props);
    return  <h5 className={props.className}>{props.headerContent}</h5>

}

export default Header;