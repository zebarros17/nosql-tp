db.employees.createIndex({ department_id: 1 }, { name: "emp_department_ix" });

db.employees.createIndex({ manager_id: 1 }, { name: "emp_manager_ix" });

db.employees.createIndex(
  { last_name: 1, first_name: 1 },
  { name: "emp_name_ix" }
);

db.employees_archive.createIndex({ user_name: 1 }, { name: "emparch_user_ix" });

db.shopping_session.createIndex({ user_id: 1 }, { name: "shopping_user_ix" });

db.employees.dropIndexes();
db.employees_archive.dropIndexes();
db.shopping_session.dropIndexes();
