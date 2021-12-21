package com.barchenko.project.appUser;

import com.barchenko.project.dao.dao_contract.UserDAO;
import com.barchenko.project.entity.tables.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private UserDAO userDAO;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        String username = authentication.getName();
        String password = authentication.getCredentials().toString();

        User user = userDAO.findByUsernameOrEmail(username).get();

        List<GrantedAuthority> authorities =
                Collections.singletonList(new SimpleGrantedAuthority(user.getRole().getName().name()));

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username, password, authorities);
        return token;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

}
