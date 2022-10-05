package com.putacovertoyourchild.app.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.putacovertoyourchild.app.entity.dao.IAppUserDao;
import com.putacovertoyourchild.app.entity.model.AppUser;

@Service
public class AppUserService implements IAppUserService {

	@Autowired
	IAppUserDao appUserDao;
	
	@Override
	public List<AppUser> getAll() {
		return (List<AppUser>) appUserDao.findAll();
		
	}

	@Override
	public AppUser getOne(long id) {
		return appUserDao.findById(id).get();
	}

	@Override
	public void post(AppUser appUser) {
		appUserDao.save(appUser);
		
	}

	@Override
	public void put(AppUser appUser, long id) {
		appUserDao.findById(id).ifPresent((x)->{
			appUser.setId(id);
			appUserDao.save(appUser);
		});
		
	}

	@Override
	public void delete(long id) {
		appUserDao.deleteById(id);
		
	}

}
