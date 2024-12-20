package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dao.InvoiceDao;
import com.invoiceprocessing.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;

public class InvoiceServiceImpl implements InvoiceService {

        @Autowired
        InvoiceDao Dao;
    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);
        return invoice;

    }
}
