package com.barchenko.project.controller;

import com.barchenko.project.appUser.CustomAuthenticationProvider;
import com.barchenko.project.appUser.UserPrincipal;
import com.barchenko.project.entity.dto.req.LoginPasswordDTORequest;
import com.barchenko.project.entity.dto.req.UserDTORequest;
import com.barchenko.project.service.service_contract.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    CustomAuthenticationProvider customAuthenticationProvider;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginPasswordDTORequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
        return ResponseEntity.ok(authentication);
    }

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public ResponseEntity<?> profileDetails() {
        UserPrincipal currentUser = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok(currentUser);
    }
    
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity<?> addEmployeeData(@Valid @RequestBody UserDTORequest userDTORequest) {
        userService.saveOrUpdateUser(userDTORequest);
        return ResponseEntity.ok("Successful");
    }

    @RequestMapping(value = "/signout", method = RequestMethod.GET)
    public ResponseEntity<?> logOutUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null){
            SecurityContextHolder.clearContext();
        }
        return ResponseEntity.ok("Successful");
    }
}
