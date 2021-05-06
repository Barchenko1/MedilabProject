package com.barchenko.project.controller;

import com.barchenko.project.entity.dto.req.UserDTORequest;
import com.barchenko.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> addEmployeeData(@Valid @RequestBody UserDTORequest userDTORequest) {
        userService.addUserData(userDTORequest);
        return ResponseEntity.ok("Successful");
    }
}
