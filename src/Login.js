import React from 'react'
import {Container} from "react-bootstrap"

const auth_url = "https://accounts.spotify.com/authorize?client_id=650c755753874c28b47b5169e4fd1bf6&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
function Login() {
    return (
      <Container className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}>
      <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-pink-logo-33.png" alt="" srcset="" style={{width:"100px"}}/>
          <a className="btn btn-success btn-lg" href={auth_url}>
              Log in to Song Library
          </a>
      </Container>
    )
}

export default Login
