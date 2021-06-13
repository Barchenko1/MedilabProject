package com.barchenko.project.entity.tables;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "proposal")
public class Proposal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proposal_id")
    private Long proposalId;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "company_id")
    private Company company;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "proposal_productLine",
            joinColumns = { @JoinColumn(name = "proposal_id") },
            inverseJoinColumns = { @JoinColumn(name = "productLine_id") }
    )
    private Set<ProductLine> productLines = new HashSet<>();

    private int discount;

    public Long getProposalId() {
        return proposalId;
    }

    public void setProposalId(Long proposalId) {
        this.proposalId = proposalId;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public Set<ProductLine> getProductLines() {
        return productLines;
    }

    public void setProductLines(Set<ProductLine> productLines) {
        this.productLines = productLines;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}
