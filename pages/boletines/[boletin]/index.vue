<template>
  <div class="container">
    <div class="blog-post">
    <header class="blog-post-header">
      <h1>Esto es un boletín #1</h1>
      <p class="blog-post-date">24/05/45</p>
    </header>
    <article class="blog-post-content">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae obcaecati expedita nam veritatis a voluptates rem ea eligendi qui illum impedit, dolore assumenda aliquid id, officiis ullam earum sit amet.
        Voluptate, at enim? Nulla est quis pariatur soluta, nostrum eveniet autem accusantium magnam laboriosam quia? Velit, ea perferendis explicabo fugiat quo, sed maxime saepe nisi iusto beatae quis placeat doloremque?
        Corporis saepe necessitatibus pariatur, eaque atque voluptatibus minus iste tempora id rem nobis at aspernatur maxime impedit, culpa et. Obcaecati quasi ipsum doloremque dolorem dolorum iusto, dicta repudiandae optio accusantium.
      </p>
    </article>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  .blog-post {
    margin: 40px 0px;
    width: 80%;
    max-width: $desktop-lower-breakpoint;
    padding: 2em;
    background: $white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .blog-post-header h1 {
    margin-bottom: 0.5em;
    color: $blue;
    font-family: $font;
  }

  .blog-post-date {
    margin-bottom: 2em;
    color: $grey;
    font-size: 0.9em;
  }

  .blog-post-content p {
    line-height: 1.6;
    color: $black;
    font-size: 1em;
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    .blog-post {
      padding: 1em;
    }

    .blog-post-header h1 {
      font-size: 1.5em;
    }
  }
}
</style>
