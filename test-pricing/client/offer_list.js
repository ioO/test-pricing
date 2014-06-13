var offersData = [
    {
        name: "Early Bird",
        price: 600
    },
    {
        name: "Normal",
        price: 1000
    }
];
Template.offerList.helpers({
    offers: offersData
});

Template.offerList.events({
    'change select': function(event){
        var target = event.currentTarget.id;
        var multipliant = $("#" + target + " option:selected").val();
        document.getElementById("sum_" + target).innerHTML = target * multipliant;
        document.getElementById("total").innerHTML = parseInt(document.getElementById("sum_600").innerHTML) + parseInt(document.getElementById("sum_1000").innerHTML);
    }
});
