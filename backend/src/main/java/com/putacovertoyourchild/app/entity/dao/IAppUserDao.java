package com.putacovertoyourchild.app.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.putacovertoyourchild.app.entity.model.AppUser;

public interface IAppUserDao extends CrudRepository<AppUser, Long> {

}
