package starter_microservice.exception;

public class RoleAlreadyExistsException extends Exception{
    public RoleAlreadyExistsException(){
        super("role already exists!");
    }

}
