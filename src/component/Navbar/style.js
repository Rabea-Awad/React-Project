import styled from 'styled-components';

export const NavbarSection = styled.div`
        padding: 20px 0;
        overflow: hidden;
        background: #fff;
        position: relative;
        border-bottom: 1px solid #000
`
export const Logo = styled.div`
        width: 50%;
        float: left;
`
export const LogoText = styled.h2`
        font-size: 30px;
        font-weight: bold
`
export const UlList = styled.ul`
        width: 50%;
        float: left;
        list-style: none;
        padding: 0;
`
export const ListItem = styled.li`
        display: inline-block;
`
export const Anchor = styled.a`
        display: block;
        color: #222;
        text-decoration: none;
        padding: 10px 15px;
        font-weight: bold;

        &:hover {
            color: #eb5424
        }
`

/*
.navbar {
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
}

.navbar .logo {
    width: 50%;
    float: left;
}

.navbar .logo .logo-text{
    font-size: 30px;
    font-weight: bold
}

.navbar input , .navbar label {
    position: absolute;
    top: 13px;
    right: 25px;
}

.navbar input {
    display: none
}

.navbar label {
    display: block;
    width: 15px;
    height: 15px;
    background: url('../images/Navbar/open.png') no-repeat ;
    background-size: cover;
    padding: 20px;
    cursor: pointer;
}

.navbar input:checked ~ .ul-list {
    display: block;
}

.navbar input:checked ~ label {
    background: url('../images/Navbar/close.png') no-repeat ;
    background-size: cover;
}

.navbar .ul-list {
    width: 50%;
    float: left;
    list-style: none;
}

.navbar .ul-list .list-item {
    display: inline-block;
}

.navbar .ul-list .list-item a {
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
}

.navbar .ul-list .list-item a:hover {
    color: #eb5424
}

Media for Navbar Style 

@media (min-width : 992px) {
        .navbar label {
            display: none
        }
    }
    
    @media (max-width : 991px) {
        .navbar .logo {
            width: 100%;
            float: none;
        }
        
        .navbar .ul-list {
            width: 100%;
            float:  none;
            margin-top: 20px;
            display: none
        }
        
        .navbar .ul-list .list-item {
            display: block;
            text-align: center;
        }
    }
*/
