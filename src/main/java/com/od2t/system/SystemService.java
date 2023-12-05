package com.od2t.system;

import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class SystemService {

    public List<System> findAll() {
        List<SystemEntity> systemEntityList = SystemEntity.listAll();
        return SystemMapping.INSTANCE.toDomainList(systemEntityList);
    }

}
