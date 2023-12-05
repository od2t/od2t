package com.od2t.system;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.JAKARTA_CDI)
public interface SystemMapping {

    SystemMapping INSTANCE = Mappers.getMapper(SystemMapping.class);

    System toDomain(SystemEntity entity);
    List<System> toDomainList(List<SystemEntity> entities);

    @InheritInverseConfiguration(name = "toDomain")
    SystemEntity toEntity(System domain);

}
