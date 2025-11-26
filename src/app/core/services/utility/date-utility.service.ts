import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilityService {
    calculateAge(birthDate: Date): number {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        const hasHadBirthdayThisYear =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        return hasHadBirthdayThisYear ? age : age - 1;
    }
}
