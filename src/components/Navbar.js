import React,{Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

class Navbar extends Component{
    render(){
      
        return(
          <AuthContext.Consumer>
              {(authContext)=>(
                    <ThemeContext.Consumer>
                    {(themeContext)=>{
                        const {isLightTheme,light,dark}=themeContext;
                        const theme=isLightTheme ? light:dark;
                        const {toggleAuth,isAuthenticated}=authContext;
                        return(
                            <nav style={{background:theme.ui,color:theme.syntax}}>
                                <h1>Context App</h1>
                                <div onClick={toggleAuth}>
                                    {isAuthenticated?'Çıkış Yap':'Giriş Yap'}
                                </div>
                                <ul>
                                    <li>Anasayfa</li>
                                    <li>Hakkımızda</li>
                                    <li>İletişim</li>
                                </ul>
                            </nav>
                        )
                    }}
                    </ThemeContext.Consumer>
              )}
          </AuthContext.Consumer>
        )
    }
}

export default Navbar;