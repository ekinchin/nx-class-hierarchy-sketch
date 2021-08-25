export interface IMapper<Domain, Storage> {
  mapToDomain(entity: Storage): Domain;
  mapToStorage(entity: Domain): Storage;
}
