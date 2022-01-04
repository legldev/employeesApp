import { Component, Input, OnInit } from '@angular/core';
import { DepartmentsService } from './departments.service';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  loading = false;
  dataSource: any;
  employeesData: any;
  employeesPagination: any;
  deparmentSelect = '0';
  selectedValue: any;
  page = 1;
  limit = 5;

  @Input() employeeDetails = { name: '', salary: 0, department: '' };

  constructor(
    private departmentsService: DepartmentsService, 
    private employeesService: EmployeesService) { }

  ngOnInit() {
    this.refresh();
  }

  selectChange() {
    this.selectedValue = this.employeeDetails.department;
 }

 nextPage() {
    this.page++;
    this.refresh();
 }

  prevPage() {
    this.page--;
    this.refresh();
  }

  async refresh() {
    this.loading = true;
    this.departmentsService.get().subscribe((data: deparmentData) => {
      console.log(data);
      this.dataSource = data.data;
    })

    this.employeesService.get(this.page, this.limit).subscribe((data: any) => {
      console.log(data);
      this.employeesData = data.data;
      this.employeesPagination = data.pagination;
    })
    this.loading = false;
  }

  async add() {
    this.loading = true;

    this.employeesService.post(this.employeeDetails).subscribe((data) => {
      console.log(data);
    })

    this.loading = false;
  }

}

interface deparmentData {
  data: []
  pagination: {}
  }
