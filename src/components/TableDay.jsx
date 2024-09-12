import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function TableDay() {
    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Horarios</TableColumn>
                <TableColumn></TableColumn>
                <TableColumn></TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Lunes</TableCell>
                    <TableCell></TableCell>
                    <TableCell>11:00 - 20:00</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Martes</TableCell>
                    <TableCell></TableCell>
                    <TableCell>11:00 - 20:00</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Miércoles</TableCell>
                    <TableCell></TableCell>
                    <TableCell>11:00 - 20:00</TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell>Jueves</TableCell>
                    <TableCell></TableCell>
                    <TableCell>11:00 - 20:00</TableCell>
                </TableRow>
                <TableRow key="5">
                    <TableCell>Viernes</TableCell>
                    <TableCell></TableCell>
                    <TableCell>11:00 - 20:00</TableCell>
                </TableRow>
                <TableRow key="6">
                    <TableCell>Sábado</TableCell>
                    <TableCell></TableCell>
                    <TableCell>11:00 - 20:00</TableCell>
                </TableRow>
                <TableRow key="7">
                    <TableCell>Domingo</TableCell>
                    <TableCell></TableCell>
                    <TableCell>Cerrado</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}