package com.barchenko.project.appUser;

import com.barchenko.project.entity.tables.Role;
import com.barchenko.project.entity.tables.Status;
import com.barchenko.project.entity.tables.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class UserPrincipal implements UserDetails {
    private Long id;

    private String username;

    private String email;

    private String phone;
    @JsonIgnore
    private String password;

    private Status status;

    private Role role;

    private final Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(Long userId, String username, String email, String phone, String password, Status status, Role role, Collection<? extends GrantedAuthority> authorities) {
        this.id = userId;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.status = status;
        this.role = role;
        this.authorities = authorities;
    }

    public static UserPrincipal create(User user) {
        List<GrantedAuthority> authorities =
                Collections.singletonList(new SimpleGrantedAuthority(user.getRole().getName().name()));
        UserPrincipal userPrincipal = new UserPrincipal(
                user.getUserId(),
                user.getUsername(),
                user.getEmail(),
                user.getPhone(),
                user.getPassword(),
                user.getStatus(),
                user.getRole(),
                authorities
        );
        return userPrincipal;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public Status getStatus() {
        return status;
    }

    public Role getRole() {
        return role;
    }
}
