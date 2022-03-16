<body>

<div class="mainContainer">

    <?php include("includes/head.php"); ?>
    <?php include "includes/header.php" ; ?>

    <div class="contentContainer backingPowerGeneration">
        <div class="leftContentParent" style="width: 70%">
            <div class="halfContent" style="flex: 0 0 83.2%">
                    <h2>Power Generation</h2>
                    <h3>Where does our power come from?</h3>
                    <ul>
                    <li>In the UK most of our power is produced by a combination of fossil fuels such as gas and coal which emit carbon dioxide into the atmosphere.</li>
                    <li>In <strong>2020 59%</strong> of the UKs power came from low carbon sources, <strong>16%</strong> being nuclear.</li>
                    <li>The amount of power generated from solar and wind changes due to the weather and can’t be relayed upon.</li>
                    <li>When this happens, fossil fuels must be used to generate extra power to meet demand releasing more carbon dioxide.</li>
                    <li>Nuclear power stations give us a safe and reliable way to generate the power we need without releasing carbon dioxide.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

<?php include("includes/footer.php");?>
<script>
  $(function() {
    $("#powergeneration").tab('show');
  });
</script>
</body>
</html>