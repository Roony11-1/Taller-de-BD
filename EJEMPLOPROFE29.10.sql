CREATE OR REPLACE FUNCTION FN_OBT_VALOR_COM(
p_sueldo_base NUMBER,
p_id_emp NUMBER) RETURN NUMBER IS
v_valor_com NUMBER(4,3);
v_mensaje_error VARCHAR2(200);
BEGIN
   SELECT tpc.porc_com
     INTO v_valor_com
     FROM tramo_porc_comision tpc
    WHERE p_sueldo_base BETWEEN tpc.rango_inf_pc AND tpc.rango_sup_pc;
    RETURN v_valor_com;
EXCEPTION
WHEN OTHERS THEN
     v_mensaje_error:=SQLERRM;
     INSERT INTO error_proceso
            VALUES(seq_error_proc.NEXTVAL, 
                   'Error en la Función FN_OBT_VALOR_COM. Empleado: ' || p_id_emp, 
                   v_mensaje_error);
    RETURN 0;
END FN_OBT_VALOR_COM;

----
CREATE OR REPLACE TRIGGER  TRG_IU_ASIG_PORC_COM
BEFORE INSERT OR UPDATE OF salary ON empleados
FOR EACH ROW
DECLARE
v_porc_com NUMBER(4,3);
BEGIN
   IF :NEW.job_id = 'SA_REP' THEN
       :NEW.commission_pct := .30;
   ELSE
      v_porc_com :=FN_OBT_VALOR_COM(:NEW.salary, :NEW.employee_id);
       :NEW.commission_pct := v_porc_com;
   END IF;
END;

alter trigger TRG_AUDIT_EMP disable
---
INSERT INTO empleados (employee_id, first_name, last_name, email,  hire_date, job_id, salary)
VALUES(997, 'Alexander', 'Biber','ABIBER', SYSDATE, 'SH_CLERK', 5000);

INSERT INTO empleados (employee_id, first_name, last_name, email,  hire_date, job_id, salary)
VALUES(998, 'Juan', 'Peña','JPENA', SYSDATE, 'SA_REP', 10000);

UPDATE empleados
   SET salary = 8200
 WHERE employee_id=206;

